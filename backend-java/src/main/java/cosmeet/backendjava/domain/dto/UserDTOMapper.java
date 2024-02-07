package cosmeet.backendjava.domain.dto;

import cosmeet.backendjava.domain.dto.CreateUserRequest;
import cosmeet.backendjava.domain.dto.CreateUserResponse;
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
            request.name(),
            request.email(),
            request.password()
        );
    }
}
