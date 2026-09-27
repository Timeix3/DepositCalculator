package com.neoflex.depositcalculator.controller;

import com.neoflex.depositcalculator.dto.CalculationRequestDto;
import com.neoflex.depositcalculator.dto.CalculationResponseDto;
import com.neoflex.depositcalculator.service.CalculationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/calculate")
@RequiredArgsConstructor
public class CalculationController {
    private final CalculationService calcService;

    @PostMapping
    public CalculationResponseDto calculateDeposit(@Valid @RequestBody CalculationRequestDto request) {
        return calcService.calcTotalProfit(request);
    }
}
