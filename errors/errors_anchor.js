const ANCHOR_PROGRAM = {
    // Instructions.
    "64": "InstructionMissing: 8 byte instruction identifier not provided",
    "65": "InstructionFallbackNotFound: Fallback functions are not supported",
    "66": "InstructionDidNotDeserialize: The program could not deserialize the given instruction",
    "67": "InstructionDidNotSerialize: The program could not serialize the given instruction",
    // IDL instructions.
    "78": "IdlInstructionStub: The program was compiled without idl instructions",
    "79":  "IdlInstructionInvalidProgram: Invalid program given to the IDL instruction",
    // Constraints.
    "8C": "ConstraintMut: A mut constraint was violated",
    "8D": "ConstraintHasOne: A has one constraint was violated",
    "8E": "ConstraintSigner: A signer constraint as violated",
    "8F": "ConstraintRaw: A raw constraint was violated",
    "90": "ConstraintOwner: An owner constraint was violated",
    "91": "ConstraintRentExempt: A rent exemption constraint was violated",
    "92": "ConstraintSeeds: A seeds constraint was violated",
    "93": "ConstraintExecutable: An executable constraint was violated",
    "94": "ConstraintState: A state constraint was violated",
    "95": "ConstraintAssociated: An associated constraint was violated",
    "96": "ConstraintAssociatedInit: An associated init constraint was violated",
    "97": "ConstraintClose: A close constraint was violated",
    "98": "ConstraintAddress: An address constraint was violated",
    "99": "ConstraintZero: Expected zero account discriminant",
    // Accounts.
    "A0": "AccountDiscriminatorAlreadySet: The account discriminator was already set on this account",
    "A1": "AccountDiscriminatorNotFound: No 8 byte discriminator was found on the account",
    "A2": "AccountDiscriminatorMismatch: 8 byte discriminator did not match what was expected",
    "A3": "AccountDidNotDeserialize: Failed to deserialize the account",
    "A4": "AccountDidNotSerialize: Failed to serialize the account",
    "A5": "AccountNotEnoughKeys: Not enough account keys given to the instruction",
    "A6": "AccountNotMutable: The given account is not mutable",
    "A7": "AccountNotProgramOwned: The given account is not owned by the executing program",
    "A8": "InvalidProgramId: Program ID was not as expected",
    "A9": "InvalidProgramExecutable: Program account is not executable",
    "AA": "AccountNotSigner: The given account did not sign",
    // State.
    "B4": "StateInvalidAddress: The given state account does not have the correct address",
    // Used for APIs that shouldn't be used anymore.
    "12B": "Deprecated: The API being used is deprecated and should no longer be used",
};
export default ANCHOR_PROGRAM;