package cosmeet.backendjava.domain.dto.user;

public record LoginRequestDTO(
        String email,
        String password
) {
}
