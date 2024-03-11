package cosmeet.backendjava.domain.dto.user;

import java.util.UUID;

public record GetUserResponse (UUID uuid, String name, String email) {
}
