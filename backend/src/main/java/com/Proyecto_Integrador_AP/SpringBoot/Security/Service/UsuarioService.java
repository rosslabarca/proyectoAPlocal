/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Proyecto_Integrador_AP.SpringBoot.Security.Service;

import com.Proyecto_Integrador_AP.SpringBoot.Security.Entity.Usuario;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Proyecto_Integrador_AP.SpringBoot.Security.Repository.iUsuarioRepository;

@Service
@Transactional
public class UsuarioService {
    @Autowired iUsuarioRepository iusuarioRepository;
    
    public Optional<Usuario> getByNombreUsuario(String nombreUsuario){
    return iusuarioRepository.findByNombreUsuario(nombreUsuario);
    }
    
     public boolean existsByNombreUsuario(String nombreUsuario) {
        return iusuarioRepository.existsByNombreUsuario(nombreUsuario);
     }
  
    public boolean existsByEmail(String email) {
        return iusuarioRepository.existsByEmail(email);
    }
    public void save(Usuario usuario){
     iusuarioRepository.save(usuario);
    }
   
    }
