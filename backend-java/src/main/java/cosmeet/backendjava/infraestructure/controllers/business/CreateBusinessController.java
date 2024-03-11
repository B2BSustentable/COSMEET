package cosmeet.backendjava.infraestructure.controllers.business;

import cosmeet.backendjava.application.usecases.business.CreateBusinessInterface;
import cosmeet.backendjava.domain.dto.business.BusinessDTOMapper;
import cosmeet.backendjava.domain.dto.business.CreateBusinessRequest;
import cosmeet.backendjava.domain.dto.business.CreateBusinessResponse;
import cosmeet.backendjava.domain.entity.Business;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/business")
public class CreateBusinessController {
    private final CreateBusinessInterface createBusinessInterface;

    public CreateBusinessController(CreateBusinessInterface createBusinessInterface) {
        this.createBusinessInterface = createBusinessInterface;
    }

    @PostMapping
    ResponseEntity<CreateBusinessResponse> createBusiness(@Valid @RequestBody CreateBusinessRequest request) {
        Business business = new BusinessDTOMapper().toBusiness(request);
        Business createdBusiness = createBusinessInterface.createBusiness(business);

        return ResponseEntity
                .status(201)
                .body(new BusinessDTOMapper().toCreateResponse(createdBusiness));
    }
}
