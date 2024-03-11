package cosmeet.backendjava.infraestructure.gateways.business;

import cosmeet.backendjava.domain.entity.Business;
import cosmeet.backendjava.domain.entity.User;
import cosmeet.backendjava.infraestructure.persistence.business.BusinessEntity;
import cosmeet.backendjava.infraestructure.persistence.user.UserEntity;

public class BusinessEntityMapper {
    BusinessEntity toEntity(Business userDomainObj) {
        return new BusinessEntity(
            null,
            userDomainObj.getUuid(),
            userDomainObj.getName(),
            userDomainObj.getEmail(),
            userDomainObj.getPhone(),
            userDomainObj.getCnpj(),
            userDomainObj.getAbout(),
            userDomainObj.getPhoto(),
            userDomainObj.getActive(),
            userDomainObj.getDeleted(),
            userDomainObj.getVerified(),
            userDomainObj.getUser(),
            userDomainObj.getPlans(),
            userDomainObj.getCategory()
        );
    }

    Business toDomainObj(BusinessEntity businessEntity) {
        return new Business(
            businessEntity.getId(),
            businessEntity.getUuid(),
            businessEntity.getName(),
            businessEntity.getEmail(),
            businessEntity.getPhone(),
            businessEntity.getCnpj(),
            businessEntity.getAbout(),
            businessEntity.getPhoto(),
            businessEntity.getActive(),
            businessEntity.getDeleted(),
            businessEntity.getVerified(),
            businessEntity.getUser(),
            businessEntity.getPlans(),
            businessEntity.getCategory()
        );
    }
}
