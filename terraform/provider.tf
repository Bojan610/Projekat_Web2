provider "aws" {
  region     = "eu-central-1"
  access_key = "AKIAQGUOCU3GJA2NKD4H"
  secret_key = "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"
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}
