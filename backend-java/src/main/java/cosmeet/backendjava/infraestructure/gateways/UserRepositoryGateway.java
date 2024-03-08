package cosmeet.backendjava.infraestructure.gateways;

import cosmeet.backendjava.application.gateways.UserGateway;
import cosmeet.backendjava.domain.entity.User;
import cosmeet.backendjava.infraestructure.persistence.user.UserEntity;
import cosmeet.backendjava.infraestructure.persistence.user.UserRepository;

public class UserRepositoryGateway implements UserGateway {
    private final UserRepository userRepository;
    private final UserEntityMapper userEntityMapper;

    public UserRepositoryGateway(UserRepository userRepository, UserEntityMapper userEntityMapper) {
        this.userRepository = userRepository;
        this.userEntityMapper = userEntityMapper;
    }

    @Override
    public User createUser(User userDomainObj) {
        UserEntity userEntity = userEntityMapper.toEntity(userDomainObj);
        UserEntity savedUserEntity = userRepository.save(userEntity);

        return userEntityMapper.toDomainObj(savedUserEntity);
    }

    @Override
    public User getUser(String email, String password) {
        return null;
    }
}
