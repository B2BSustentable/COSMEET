package cosmeet.backendjava.application.usecases;

import cosmeet.backendjava.application.gateways.UserGateway;
import cosmeet.backendjava.domain.entity.User;

public class CreateUserInterface {
    private final UserGateway userGateway;

    public CreateUserInterface(UserGateway userGateway) {
        this.userGateway = userGateway;
    }

    public User createUser(User user) {
        return userGateway.createUser(user);
    }
}
