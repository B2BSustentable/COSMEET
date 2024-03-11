package cosmeet.backendjava.domain.entity;

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
@Table(name = "plans")
public class Plans {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "BINARY(16)")
    private UUID uuid;

    private String name;

    private Double price;

    private Boolean favorite;

    private Boolean limitSearch;

    private Integer limitCategory;

    @PrePersist
    public void generateUUID() {
        this.uuid = UUID.randomUUID();
    }
}