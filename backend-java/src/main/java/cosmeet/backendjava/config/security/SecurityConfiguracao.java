package cosmeet.backendjava.config.security;

import cosmeet.backendjava.config.security.jwt.GerenciadorTokenJwt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfiguracao {

    @Autowired
    private AutorizacaoService autenticacaoService;

    @Qualifier("autenticacaoEntryPoint")
    @Autowired
    private AutenticacaoEntryPoint autenticacaoJwtEntryPoint;

    private static final AntPathRequestMatcher[] URLS_PERMITIDAS_PARA_TODOS = {
            AntPathRequestMatcher.antMatcher(HttpMethod.GET,"/h2-console/**"),
            AntPathRequestMatcher.antMatcher(HttpMethod.POST,"/h2-console/**"),
            AntPathRequestMatcher.antMatcher(HttpMethod.GET, "/swagger-ui/**"),
            AntPathRequestMatcher.antMatcher(HttpMethod.GET, "/v3/api-docs/**"),
            AntPathRequestMatcher.antMatcher(HttpMethod.POST, "/users/**"),
            AntPathRequestMatcher.antMatcher(HttpMethod.POST, "/users/login"),
            AntPathRequestMatcher.antMatcher(HttpMethod.GET, "/users/**"),
            AntPathRequestMatcher.antMatcher(HttpMethod.GET, "/address/**"),
            AntPathRequestMatcher.antMatcher(HttpMethod.POST, "/address/**"),
            AntPathRequestMatcher.antMatcher(HttpMethod.GET, "/business/**"),
            AntPathRequestMatcher.antMatcher(HttpMethod.GET, "/business/{id}/**"),
            AntPathRequestMatcher.antMatcher(HttpMethod.PUT, "/business/**"),
            AntPathRequestMatcher.antMatcher(HttpMethod.POST, "/business/search/**"),
            AntPathRequestMatcher.antMatcher(HttpMethod.POST, "/business/**"),
            AntPathRequestMatcher.antMatcher(HttpMethod.GET, "/business/**"),
    };

    @Bean
    public GerenciadorTokenJwt gerenciadorTokenJwt() {
        GerenciadorTokenJwt gerenciadorTokenJwt = new GerenciadorTokenJwt();
        return gerenciadorTokenJwt;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers(headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::disable))
                .cors(Customizer.withDefaults())
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(
                        authorize -> {
                            authorize.requestMatchers(URLS_PERMITIDAS_PARA_TODOS).permitAll();
                            authorize.anyRequest().authenticated();
                        }
                )
                .exceptionHandling(eh -> eh.authenticationEntryPoint(autenticacaoJwtEntryPoint))
                .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        http.addFilterBefore(jwtAuthenticationFilterBean(), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationManager authManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder =
                http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.authenticationProvider(new AutenticacaoProvider(autenticacaoService, passwordEncoder()));
        return authenticationManagerBuilder.build();
    }

    @Bean
    public AutenticacaoEntryPoint jwtAuthenticationEntryPointBean() {
        return new AutenticacaoEntryPoint();
    }

    @Bean
    public AutenticacaoFilter jwtAuthenticationFilterBean() {
        return new AutenticacaoFilter(autenticacaoService, jwtAuthenticationUtilBean());
    }

    public GerenciadorTokenJwt jwtAuthenticationUtilBean() {
        return new GerenciadorTokenJwt();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
        public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuracao = new CorsConfiguration();
        configuracao.applyPermitDefaultValues();
        configuracao.setAllowedMethods(
                Arrays.asList(
                        HttpMethod.GET.name(),
                        HttpMethod.POST.name(),
                        HttpMethod.PUT.name(),
                        HttpMethod.PATCH.name(),
                        HttpMethod.DELETE.name(),
                        HttpMethod.OPTIONS.name(),
                        HttpMethod.HEAD.name(),
                        HttpMethod.TRACE.name()));

        configuracao.setExposedHeaders(List.of(HttpHeaders.CONTENT_DISPOSITION));

        UrlBasedCorsConfigurationSource origem = new UrlBasedCorsConfigurationSource();
        origem.registerCorsConfiguration("/**", configuracao);

        return origem;
    }
}