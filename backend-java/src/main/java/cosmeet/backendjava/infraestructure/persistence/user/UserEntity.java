package cosmeet.backendjava.infraestructure.persistence.user;

import cosmeet.backendjava.domain.entity.Business;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "BINARY(16)")
    private UUID uuid;

    @NotBlank
    private String name;

    @Email(message = "Email should be valid")
    private String email;

    @NotBlank
    private String password;

    @PrePersist
    public void generateUUID() {
        this.uuid = UUID.randomUUID();
    }
}
