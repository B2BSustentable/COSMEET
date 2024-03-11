package cosmeet.backendjava.infraestructure.persistence.business;

import cosmeet.backendjava.domain.entity.Access;
import cosmeet.backendjava.domain.entity.Address;
import cosmeet.backendjava.domain.entity.Category;
import cosmeet.backendjava.domain.entity.Plans;
import cosmeet.backendjava.domain.entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CNPJ;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
@Table(name = "business")
public class BusinessEntity {
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
    private String phone;

    @CNPJ
    private String cnpj;

    private String about;
    private String photo;
    private Boolean active;
    private Boolean deleted;
    private Boolean verified;

    @OneToOne
    @JoinColumn(name = "users_uuid")
    private User user;
    @OneToOne
    @JoinColumn(name = "plans_uuid")
    private Plans plans;
    @OneToOne
    @JoinColumn(name = "category_uuid")
    private Category category;

    @PrePersist
    public void generateUUID() {
        this.uuid = UUID.randomUUID();
    }
}