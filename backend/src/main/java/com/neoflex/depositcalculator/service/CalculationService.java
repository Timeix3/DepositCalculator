package com.neoflex.depositcalculator.service;

import com.neoflex.depositcalculator.dto.CalculationRequestDto;
import com.neoflex.depositcalculator.dto.CalculationResponseDto;

public interface CalculationService {
    CalculationResponseDto calcTotalProfit(CalculationRequestDto data);
}
