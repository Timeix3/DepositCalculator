package com.neoflex.depositcalculator.dto;

import jakarta.validation.constraints.*;

import java.math.BigDecimal;

public record CalculationRequestDto(
        @NotNull(message = "Введите сумму вклада")
        @Min(value = 1000, message = "Сумма должна быть не меньше 1000")
        @Max(value = 10000000, message = "Сумма должна быть не больше 10000000")
        Integer amount,

        @NotNull(message = "Введите срок в месяцах")
        @Min(value = 1, message = "Минимальный срок - 1 месяц")
        @Max(value = 60, message = "Максимальный срок - 60 месяцев")
        Integer months,

        @NotNull(message = "Введите годовую ставку")
        @DecimalMin(value = "1", message = "Ставка должна быть не меньше 1%")
        @DecimalMax(value = "20", message = "Ставка должна быть не больше 20%")
        BigDecimal rate
) { }
