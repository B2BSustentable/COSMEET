package cosmeet.backendjava.domain.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
@Table(name = "business")
public class Business {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // REFERENCIAR O ID USER;
    private Long idUser;
    // REFERENCIAR O ID ADDRESS;
    private Long idAddress;
    // REFERENCIAR O ID ACCESS;
    private Long idAccess;
    // REFERENCIAR O ID PLANS;
    private Long idPlans;

    private String name;
    private String email;
    private String phone;
    private String cnpj;

    private Boolean active;
    private Boolean deleted;
    private Boolean verified;


}