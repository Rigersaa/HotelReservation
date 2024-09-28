package com.example.hotelreservation;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "reservations")  // This annotation tells Spring Data that this class represents a MongoDB document.
public class Reservation {
    @Id  // This annotation marks the field as the document's identifier
    private String id;
    private String name;
    private int room;
    private Date date;

    // Default constructor
    public Reservation() {}

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRoom() {
        return room;
    }

    public void setRoom(int room) {
        this.room = room;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
