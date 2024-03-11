package cosmeet.backendjava.infraestructure.persistence.business;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessRepository extends JpaRepository<BusinessEntity, Long>{
}
