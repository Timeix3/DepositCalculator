package com.neoflex.depositcalculator.dto;

import java.math.BigDecimal;

public record CalculationResponseDto(BigDecimal total, BigDecimal profit) { }
