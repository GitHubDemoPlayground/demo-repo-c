export type ValidationRule<T> = {
  validate: (value: T) => boolean;
  message: string;
};

export type ValidationResult = {
  valid: boolean;
  errors: string[];
};

export function validateField<T>(
  value: T,
  rules: ValidationRule<T>[]
): ValidationResult {
  const errors = rules
    .filter((rule) => !rule.validate(value))
    .map((rule) => rule.message);

  return { valid: errors.length === 0, errors };
}

export function required(message = "This field is required"): ValidationRule<string> {
  return {
    validate: (value) => value.trim().length > 0,
    message,
  };
}
