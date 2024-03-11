package cosmeet.backendjava.infraestructure.controllers.user;

import cosmeet.backendjava.application.usecases.user.CreateUserInterface;
import cosmeet.backendjava.application.usecases.user.GetUserInterface;
import cosmeet.backendjava.domain.dto.user.*;
import cosmeet.backendjava.domain.entity.User;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class GetUserController {
    private final GetUserInterface getUserInterface;

    public GetUserController(GetUserInterface getUserInterface) {
        this.getUserInterface = getUserInterface;
    }

    @GetMapping
    ResponseEntity<GetUserResponse> getUser(@Valid @RequestBody GetUserRequest request) {
        User user = new UserDTOMapper().toUser(request);
        User getUser = getUserInterface.getUser(user);

        return ResponseEntity
                .status(200)
                .body(new UserDTOMapper().toGetResponse(getUser));
    }
}
