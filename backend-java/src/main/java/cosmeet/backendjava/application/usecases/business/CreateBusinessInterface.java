package cosmeet.backendjava.application.usecases.business;

import cosmeet.backendjava.application.gateways.BusinessGateway;

public class CreateBusinessInterface {
    private final BusinessGateway businessGateway;

    public CreateBusinessInterface(BusinessGateway businessGateway) {
        this.businessGateway = businessGateway;
    }
}
