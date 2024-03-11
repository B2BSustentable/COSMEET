package cosmeet.backendjava.infraestructure.persistence.access;

import cosmeet.backendjava.domain.entity.Business;
import jakarta.persistence.*;
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
@Table(name = "access")
public class AccessEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "BINARY(16)")
    private UUID uuid;

    private Integer count;

    @OneToOne
    @JoinColumn(name = "business_uuid")
    private Business business;

    @PrePersist
    public void generateUUID() {
        this.uuid = UUID.randomUUID();
    }
}
