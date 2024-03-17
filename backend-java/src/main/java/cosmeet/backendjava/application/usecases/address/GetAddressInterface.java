package cosmeet.backendjava.application.usecases.address;

import cosmeet.backendjava.config.CepAbertoConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GetAddressInterface {
    private final CepAbertoConfig cepAberto;

    public GetAddressInterface(CepAbertoConfig cepAberto) {
        this.cepAberto = cepAberto;
    }

    public Optional<CepAbertoConfig.Cep> getAddressByCep(String cep) {
        return cepAberto.searchByCep(cep);
    }
}
