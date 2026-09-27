package com.neoflex.depositcalculator.service;

import com.neoflex.depositcalculator.dto.CalculationRequestDto;
import com.neoflex.depositcalculator.dto.CalculationResponseDto;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;

@Service
public class CalculationServiceDefault implements CalculationService {

    @Override
    public CalculationResponseDto calcTotalProfit(CalculationRequestDto data) {
        BigDecimal amount = BigDecimal.valueOf(data.amount());

        BigDecimal monthlyRate = data.rate()
                .divide(BigDecimal.valueOf(100), MathContext.DECIMAL64)
                .divide(BigDecimal.valueOf(12), MathContext.DECIMAL64);

        BigDecimal sum = BigDecimal.ONE.add(monthlyRate);

        BigDecimal pow = sum.pow(data.months(), MathContext.DECIMAL64);

        BigDecimal total = amount.multiply(pow).setScale(2, RoundingMode.HALF_UP);
        BigDecimal profit = total.subtract(amount).setScale(2, RoundingMode.HALF_UP);

        return new CalculationResponseDto(total, profit);
    }
}