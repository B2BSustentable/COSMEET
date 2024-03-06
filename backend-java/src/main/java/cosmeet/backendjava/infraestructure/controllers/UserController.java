package cosmeet.backendjava.infraestructure.controllers;

import cosmeet.backendjava.application.usecases.CreateUserInterface;
import cosmeet.backendjava.domain.dto.CreateUserRequest;
import cosmeet.backendjava.domain.dto.CreateUserResponse;
import cosmeet.backendjava.domain.dto.UserDTOMapper;
import cosmeet.backendjava.domain.entity.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class UserController {
    private final CreateUserInterface createUserInterface;

    public UserController(CreateUserInterface createUserInterface) {
        this.createUserInterface = createUserInterface;
    }
    @GetMapping("/health")
    String hello() {
        return "Hello, world!";
    }

    @PostMapping
    CreateUserResponse createUser(@RequestBody CreateUserRequest request) {
        User user = new UserDTOMapper().toUser(request);
        User createdUser = createUserInterface.createUser(user);
        return new UserDTOMapper().toResponse(createdUser);
    }
}
