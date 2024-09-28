package com.example.hotelreservation;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends MongoRepository<Reservation, String> {

    List<Reservation> findAll();
    // Additional custom query methods can be defined here if needed

    Optional<Reservation> findById(String id);

    Reservation save(Reservation reservation);

    void deleteById(String id);
}
