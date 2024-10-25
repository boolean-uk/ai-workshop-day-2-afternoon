package org.hobbies.controllers;

import org.hobbies.models.Hobby;
import org.hobbies.repositories.HobbyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hobbies")
public class HobbyController {

    @Autowired
    private HobbyRepository hobbyRepository;

    @GetMapping
    public List<Hobby> getHobbies() {
        return hobbyRepository.findAll();
    }

    @GetMapping("/{id}")
    public Hobby getHobby(@PathVariable int id) {
        return hobbyRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Hobby addHobby(@RequestBody Hobby hobby) {
        return hobbyRepository.save(hobby);
    }

    @PutMapping("/{id}")
    public Hobby updateHobby(@PathVariable int id, @RequestBody Hobby hobby) {
        hobby.setId(id);
        return hobbyRepository.save(hobby);
    }

    @DeleteMapping("/{id}")
    public void deleteHobby(@PathVariable int id) {
        hobbyRepository.deleteById(id);
    }
}
