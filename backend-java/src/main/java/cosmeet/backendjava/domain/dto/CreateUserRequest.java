package cosmeet.backendjava.domain.dto;

public record CreateUserRequest(String name, String email, String password) {
}
