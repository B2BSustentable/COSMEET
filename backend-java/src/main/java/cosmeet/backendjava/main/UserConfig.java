package cosmeet.backendjava.main;

import cosmeet.backendjava.application.gateways.UserGateway;
import cosmeet.backendjava.application.usecases.CreateUserInterface;
import cosmeet.backendjava.domain.dto.UserDTOMapper;
import cosmeet.backendjava.infraestructure.gateways.UserEntityMapper;
import cosmeet.backendjava.infraestructure.gateways.UserRepositoryGateway;
import cosmeet.backendjava.infraestructure.persistence.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {
    @Bean
    CreateUserInterface createUserUseCase(UserGateway userGateway) {
        return new CreateUserInterface(userGateway);
    }

    @Bean
    UserGateway userGateway(UserRepository userRepository, UserEntityMapper userEntityMapper) {
        return new UserRepositoryGateway(userRepository, userEntityMapper);
    }

    @Bean
    UserEntityMapper userEntityMapper() {
        return new UserEntityMapper();
    }

    @Bean
    UserDTOMapper userDTOMapper() {
        return new UserDTOMapper();
    }
}

