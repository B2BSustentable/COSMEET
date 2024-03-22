package cosmeet.backendjava.domain.dto.user;

public record LoginResponseDTO(
        String token,
        Long idUser) {
}
