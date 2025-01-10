'use server'
import {isNewDeclarationValidByCodesText} from 'typescript-breaking-change-detector';

export async function checkTypeScriptChanges(oldCode: string, newCode: string) {
 return isNewDeclarationValidByCodesText(oldCode, newCode);

}