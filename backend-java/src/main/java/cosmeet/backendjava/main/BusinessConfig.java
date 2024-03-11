package cosmeet.backendjava.main;

import cosmeet.backendjava.application.gateways.BusinessGateway;
import cosmeet.backendjava.application.gateways.UserGateway;
import cosmeet.backendjava.application.usecases.business.CreateBusinessInterface;
import cosmeet.backendjava.application.usecases.user.CreateUserInterface;
import cosmeet.backendjava.domain.dto.business.BusinessDTOMapper;
import cosmeet.backendjava.domain.dto.user.UserDTOMapper;
import cosmeet.backendjava.infraestructure.gateways.business.BusinessEntityMapper;
import cosmeet.backendjava.infraestructure.gateways.business.BusinessRepositoryGateway;
import cosmeet.backendjava.infraestructure.gateways.user.UserEntityMapper;
import cosmeet.backendjava.infraestructure.gateways.user.UserRepositoryGateway;
import cosmeet.backendjava.infraestructure.persistence.business.BusinessRepository;
import cosmeet.backendjava.infraestructure.persistence.user.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BusinessConfig {
    @Bean
    CreateBusinessInterface createBusinessUseCase(BusinessGateway businessGateway) {
        return new CreateBusinessInterface(businessGateway);
    }

    @Bean
    BusinessGateway businessGateway(BusinessRepository businessRepository, BusinessEntityMapper businessEntityMapper) {
        return new BusinessRepositoryGateway(businessRepository, businessEntityMapper);
    }

    @Bean
    BusinessEntityMapper businessEntityMapper() {
        return new BusinessEntityMapper();
    }

    @Bean
    BusinessDTOMapper businessDTOMapper() {
        return new BusinessDTOMapper();
    }
}
