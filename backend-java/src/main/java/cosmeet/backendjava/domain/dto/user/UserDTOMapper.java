package cosmeet.backendjava.domain.dto.user;

import cosmeet.backendjava.domain.entity.User;

public class UserDTOMapper {
    public CreateUserResponse toResponse(User user) {
        return new CreateUserResponse(
                user.getName(), user.getEmail()
        );
    }

    public User toUser(CreateUserRequest request) {
        return new User(
            null,
            null,
            request.name(),
            request.email(),
            request.password()
        );
    }
}
