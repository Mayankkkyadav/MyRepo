package com.lti.test;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.lti.code.Add;

public class Test1 {
 
	@Test
	public void TestSum1() {
		assertEquals(10,Add.add(4, 6));
		
	}
	
	@Test
	public void TestSum2() {
		assertEquals(-2,Add.sub(4, 6));
		
	}
}
