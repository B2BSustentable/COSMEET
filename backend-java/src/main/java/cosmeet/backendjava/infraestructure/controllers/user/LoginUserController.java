package cosmeet.backendjava.infraestructure.controllers.user;

import cosmeet.backendjava.config.security.jwt.GerenciadorTokenJwt;
import cosmeet.backendjava.domain.dto.user.LoginRequestDTO;
import cosmeet.backendjava.domain.dto.user.LoginResponseDTO;
import cosmeet.backendjava.domain.entity.User;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class LoginUserController {

    private final GerenciadorTokenJwt gerenciadorTokenJwt;

    private final AuthenticationManager authenticationManager;

    public LoginUserController(GerenciadorTokenJwt gerenciadorTokenJwt, AuthenticationManager authenticationManager) {
        this.gerenciadorTokenJwt = gerenciadorTokenJwt;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid LoginRequestDTO data) {
        final UsernamePasswordAuthenticationToken credentials = new UsernamePasswordAuthenticationToken(data.email(), data.password());
        final Authentication authentication = this.authenticationManager.authenticate(credentials);


        var token = gerenciadorTokenJwt.generateToken(authentication);

        return ResponseEntity.ok(new LoginResponseDTO(token, ((User) authentication.getPrincipal()).getId()));
    }
}
