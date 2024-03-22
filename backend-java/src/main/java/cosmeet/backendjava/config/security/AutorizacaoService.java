package cosmeet.backendjava.config.security;

import cosmeet.backendjava.domain.dto.user.UserDTOMapper;
import cosmeet.backendjava.infraestructure.persistence.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AutorizacaoService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return UserDTOMapper.toUserDetails(userRepository.findByEmail(email));
    }
}
