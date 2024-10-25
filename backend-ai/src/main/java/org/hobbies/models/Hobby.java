package org.hobbies.models;

import jakarta.persistence.*;

@Entity
@Table(name = "hobbies")
public class Hobby {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column
    private int favoriteScoreRank;

    public Hobby() {
    }

    public Hobby(String name, int favoriteScoreRank) {
        this.name = name;
        this.favoriteScoreRank = favoriteScoreRank;
    }

    public int getId() {

        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getFavoriteScoreRank() {
        return favoriteScoreRank;
    }

    public void setFavoriteScoreRank(int favoriteScoreRank) {
        this.favoriteScoreRank = favoriteScoreRank;
    }
}
