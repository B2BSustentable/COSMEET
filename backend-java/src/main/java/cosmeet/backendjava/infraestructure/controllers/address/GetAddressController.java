package cosmeet.backendjava.infraestructure.controllers.address;

import cosmeet.backendjava.application.usecases.address.GetAddressInterface;
import cosmeet.backendjava.config.CepAbertoConfig;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/address")
public class GetAddressController {
    GetAddressInterface getAddressInterface;

    public GetAddressController(GetAddressInterface getAddressInterface) {
        this.getAddressInterface = getAddressInterface;
    }

    @GetMapping
    public Optional<CepAbertoConfig.Cep> getAddressByCep(@RequestParam("name") String cep) {
        return getAddressInterface.getAddressByCep(cep);
    }
}
