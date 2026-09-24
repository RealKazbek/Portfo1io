# Defense notes — Task 1

**What problem?** Predict the median house value of a California census district from its characteristics.

**Why Linear Regression?** It is required and gives an interpretable baseline with several predictors.

**What are X and y?** X contains nine predictors; y is `median_house_value` in US dollars.

**What does a coefficient mean?** Expected target change for a one-unit feature increase while other features are fixed; not automatically causal.

**What is the reference category?** `<1H OCEAN` is omitted by drop-first encoding; retained ocean-proximity coefficients are relative to it.

**What is MSE?** Mean squared prediction error; large errors receive more penalty.

**MSE versus MAE?** MSE squares errors and is in dollars²; MAE averages absolute errors and is in dollars.

**What does R² = 0.6254 mean?** The model explains about 62.5% of held-out target variation.

**What are multicollinearity and VIF?** Overlapping predictors can destabilize coefficients; VIF diagnoses the inflation.

**Why split train/test?** To estimate performance on unseen data. `random_state=42` makes the split reproducible.

**What is overfitting?** Fitting training noise and performing worse on unseen data.

**Assumptions?** Approximate linearity, independent errors, roughly constant variance, and no severe multicollinearity. Normal residuals mainly matter for inference.

**Main results?** MSE = 4,908,290,571.35; MAE = $50,670.49; R² = 0.6254 on 4,128 test rows.

**Biggest limitation?** Nonlinear geographic/income effects, high VIF among predictors, and the target cap near $500,001.

**What about negative predictions?** Linear Regression is unbounded; the minimum prediction is reported in the notebook and is not clipped.
