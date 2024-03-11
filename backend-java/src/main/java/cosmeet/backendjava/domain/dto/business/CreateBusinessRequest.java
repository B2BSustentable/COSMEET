package cosmeet.backendjava.domain.dto.business;

import java.util.UUID;

public record CreateBusinessRequest (
    String name,
    String email,
    String phone,
    String CNPJ,
    String about,
    String photo,
    Boolean active,
    Boolean deleted,
    Boolean verified,
    UUID user,
    UUID plans,
    UUID category
) {
}
