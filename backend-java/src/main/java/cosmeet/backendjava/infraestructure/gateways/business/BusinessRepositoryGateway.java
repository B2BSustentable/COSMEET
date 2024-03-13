package cosmeet.backendjava.infraestructure.gateways.business;

import cosmeet.backendjava.application.gateways.BusinessGateway;
import cosmeet.backendjava.domain.entity.Business;
import cosmeet.backendjava.infraestructure.persistence.business.BusinessEntity;
import cosmeet.backendjava.infraestructure.persistence.business.BusinessRepository;

public class BusinessRepositoryGateway implements BusinessGateway {
    private final BusinessRepository businessRepository;
    private final BusinessEntityMapper businessEntityMapper;

    public BusinessRepositoryGateway(BusinessRepository businessRepository, BusinessEntityMapper businessEntityMapper) {
        this.businessRepository = businessRepository;
        this.businessEntityMapper = businessEntityMapper;
    }

    @Override
    public Business createBusiness(Business business) {
        BusinessEntity businessEntity = businessEntityMapper.toEntity(business);
        BusinessEntity savedBusinessEntity = businessRepository.save(businessEntity);

        return businessEntityMapper.toDomainObj(savedBusinessEntity);
    }
}
