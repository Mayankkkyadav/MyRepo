package com.lti.test;

import static org.junit.Assert.assertEquals;

import org.junit.*;

import com.lti.code.Arithmetic;

public class TestArithmetic {
	private Arithmetic art;
	
	@Before
	public void init(){
		art=new Arithmetic();
			
	}
	@Test
	public void TestSum() {
		assertEquals(10,art.sum(4, 6));
		
	}
	@Test
	public void Testmax() {
		assertEquals(30,art.max(30, 20));
	}
	

}
