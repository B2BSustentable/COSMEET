package cosmeet.backendjava.domain.dto.business;

import cosmeet.backendjava.domain.dto.user.CreateUserRequest;
import cosmeet.backendjava.domain.dto.user.CreateUserResponse;
import cosmeet.backendjava.domain.entity.Business;
import cosmeet.backendjava.domain.entity.User;

public class BusinessDTOMapper {

    public Business toBusiness(CreateBusinessRequest request) {
        return new Business(
        );
    }

    public CreateBusinessResponse toCreateResponse(Business business) {
        return new CreateBusinessResponse(
                business.getName(),
                business.getEmail()
        );
    }
}
