package cosmeet.backendjava.infraestructure.gateways;

import cosmeet.backendjava.domain.entity.User;
import cosmeet.backendjava.infraestructure.persistence.UserEntity;

public class UserEntityMapper {
    UserEntity toEntity(User userDomainObj) {
        return new UserEntity();
    }

    User toDomainObj(UserEntity userEntity) {
        return new User();
    }
}
