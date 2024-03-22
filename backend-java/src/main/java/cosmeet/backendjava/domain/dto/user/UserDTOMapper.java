package cosmeet.backendjava.domain.dto.user;

import cosmeet.backendjava.domain.entity.User;
import cosmeet.backendjava.infraestructure.persistence.user.UserEntity;
import org.springframework.security.core.userdetails.UserDetails;

public class UserDTOMapper {
    public CreateUserResponse toCreateResponse(User user) {
        return new CreateUserResponse(
                user.getName(),
                user.getEmail()
        );
    }

    public GetUserResponse toGetResponse(User user) {
        return new GetUserResponse(
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }

    public User toUser(CreateUserRequest request) {
        return new User(
                null,
                request.name(),
                request.email(),
                request.password()
        );
    }

    public User toUser(GetUserRequest request) {
        return new User(
                null,
                null,
                request.email(),
                request.password()
        );
    }

    public static UserDetails toUserDetails(UserEntity user) {
        return new User(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getPassword()
        );
    }
}
