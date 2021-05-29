const tileData = [
    {
    img: 'https://bn1304files.storage.live.com/y4mcNy3e20TI55BLD00KXCM0sHiDlNE6UIo8yRKG-yzydFgJ-i-3C5BCx7BZS6M4jYtbdkC5ijdFCZiZMSxrglnpZNJALEaNVZLNIYSdpwqfIDP8bbOvnCTqtjZe3DsODSl-3ahj7jYcMbXqjPZL-zXaAI9u5FsCmsfXab_CMPMvC3bs5__c1zMU9iq2Und5RjO?width=5083&height=3327&cropmode=none',
    title: 'Alyce Bass',
    },
    {
    img: 'https://bn1304files.storage.live.com/y4mxkYVPxB06XmL7ToednI5KVAS5ZASmD3EzyMVo7Z0YJQZwGhwWuKxCheNBDrtHCrKs-V3rb5SW1yk_eiV9zgtM6-ePVPce17tUHASaq2QjYC27vtFyNsuTIC_5B2NPw3l7A5Avu7vmsWqihZuOQAuRAZAS6n_sfkWrTTjvlF42Uy2hMplGYEp0b_G1UwlXB_g?width=5399&height=3599&cropmode=none',
    title: 'Sabiha Plummer',
    featured: true,
    },
    {
      img: 'https://bn1304files.storage.live.com/y4mddaTqHSwkBT8B66D2f64tFhsRqpFyFNvTpvM2Eks1qsubrqj985rhUkhjP-ICZ0eof2HUlKyIYS_T-7z35Ub1-gDhS8Uh31BEGgE_f7yN_THC8fe0gLFeGXaEnA6X9WhNfhKKXaJANrL9MbmmZyyP6zfxTUV6QF3DSAlJx_drxClkKRXFEybNs_Br-WQX3hJ?width=3648&height=5472&cropmode=none',
      title: 'Hebe Harwood',
    },
    {
      img: 'https://bn1304files.storage.live.com/y4mHiXOPLpQt5rsylCD2sud_31hITdXAteeBun9yZysVEH0I0ukY_u4GhzUZLkR-EtVq1gJH62-Vx1wYaLAWspIJ5CXMQ39eUnev1nAh1oUyl5B0YIsLa0xiIQgWNjU4ad9Ds7h2vS1xsUBj8CzERxGz4mVgG2SSM5bnkmCxROUa5EvoRJb7Rylf-diRs4vLxGa?width=3648&height=5472&cropmode=none',
      title: 'Jay Chapman',
    },
    {
      img: 'https://bn1304files.storage.live.com/y4mRMcdbXZNxtPI0gEIMyhkjMbbgRkClb0PpC_cIh2ZczbPvKfSjf10ekDOLowbCe2r7T1qkIp1QSDTuPGdqu6NuIKFKviRZFR_Gp5qdgKP_fTN1f73VNpiZvBVzrRmDCVvbYnZfuEF7w4j_pEBYMQhLIvIgCvpkhaYzhtbcxalbhWaV6j2zV_XXfgfJHppEAYv?width=5067&height=3455&cropmode=none',
      title: 'Cobie Morin',
    },
    {
      img: 'https://bn1304files.storage.live.com/y4mWc15aqXl2IvdnRXrAbW8uvbNCIz4bqJjt4bttZHQpW-hWOOcUNFMcEF-riVIfvCx57vmiGGuQYrnqRJgD9hFgwYYkY7LYacpDrBy-IxK3I5huy1dHHEHXqiNYkuqs6e0xsZE65x20KN4dsCgjdKqXK_edcT8w03rQ-L4Nj821JqswclxjGJQKKq4DX0I8ohV?width=3521&height=5281&cropmode=none',
      title: 'Arthur Stewart',
      featured: true,
    },
    {
      img: 'https://bn1304files.storage.live.com/y4mcFAeV7hpW2XnxhSCK1GD7qcckIC5Usg0Wc72kRAQMNQq2PhcSkGSf7NLG-phc1M3-mB1SiIBDZXjjXlXgHbKpQIncwoeMLvyMC8YL3Ke-cwdRQRBdF3-QDgmRpfl6SyGiP_wrF7cZ0eTqMKypScPdTGVIV55-BUPnUSn_kSHG0iR2Q5bTpJDiiu5pIRCrrtK?width=4925&height=3490&cropmode=none',
      title: 'Keanu Hood',
    },
    {
      img: 'https://bn1304files.storage.live.com/y4mLRWkZzKqATfWQg0dGHuXl5tWsub3zSrWoeJ_dEdZicAF9w91aLsPCa9q8UaoViPIb5wiLm_26A1zYYVEuEXxnSbJABc2QpLZD78N6M5rERWD9Hw4TKiDgoGxAyXYA6i7UD2lSlzppllUjPJTQg7tIFtNy-OkSm7y1TyZnTEhD05MP1rAcc-Z6pp454EzV7M_?width=4367&height=2985&cropmode=none',
      title: 'Leonardo Davila',
    },
    // {
    //   img: 'https://bn1304files.storage.live.com/y4m-72iuT_8tnnYjBT08d6cPlQh68VU47thIUBKd5LlToUeboVoxe6eqc5FXNcbvAGoERju4hsbFCHE6yYAj_ac0goDtiUgBnM3O8ToFq1Y9olBzpZ_fRjuqRy8QlQAKMdN_1uIAsRXKlqajmPpm_BdbIK_O0gjTY1AaEwEQk_stnURXesi7OrtmgtbB9NZVJAn?width=5472&height=3648&cropmode=none',
    //   title: 'Reema Daniel',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f05c14dd4db49f08a789e6449604c490',
    //   title: 'Atticus Aldred',
    // },
    // {
    //   img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=350',
    //   title: 'Corin Mcghee',
    // },
    // {
    //   img: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&h=350',
    //   title: 'Ali Hendricks',
    // },
  ];
  
  export default tileData;