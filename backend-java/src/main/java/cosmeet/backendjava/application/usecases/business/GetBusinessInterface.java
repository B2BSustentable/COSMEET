package cosmeet.backendjava.application.usecases.business;

import cosmeet.backendjava.application.gateways.BusinessGateway;

public class GetBusinessInterface {
    private final BusinessGateway businessGateway;

    public GetBusinessInterface(BusinessGateway businessGateway) {
        this.businessGateway = businessGateway;
    }
}
