package cosmeet.backendjava.application.usecases.user;

import cosmeet.backendjava.application.gateways.UserGateway;
import cosmeet.backendjava.domain.entity.User;

public class GetUserInterface {
    private final UserGateway userGateway;

    public GetUserInterface(UserGateway userGateway) {
        this.userGateway = userGateway;
    }

    public User getUser(User user) {
        return userGateway.getUser(user.getEmail(), user.getPassword());
    }
}
