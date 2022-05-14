package com.pms.models;

import org.springframework.data.annotation.Id;


public class Drug {
	@Id
	private long id;
	private String name;
	private int price;
	private String type;
	private String category;
	

	public Drug() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Drug(long id, String name, int price, String type, String category) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.type = type;
		this.category = category;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	
	@Override
	public String toString() {
		return "Drug [id=" + id + ", name=" + name + ", price=" + price + ", type=" + type + ", category=" + category
				+ "]";
	}
}