/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { defineInjector } from '../di/defs';
import { convertInjectableProviderToFactory } from '../di/util';
import { compileNgModule as render3CompileNgModule } from '../render3/jit/module';
import { makeDecorator } from '../util/decorators';
/**
 * Represents the expansion of an `NgModule` into its scopes.
 *
 * A scope is a set of directives and pipes that are visible in a particular context. Each
 * `NgModule` has two scopes. The `compilation` scope is the set of directives and pipes that will
 * be recognized in the templates of components declared by the module. The `exported` scope is the
 * set of directives and pipes exported by a module (that is, module B's exported scope gets added
 * to module A's compilation scope when module A imports B).
 * @record
 */
export function NgModuleTransitiveScopes() { }
if (false) {
    /** @type {?} */
    NgModuleTransitiveScopes.prototype.compilation;
    /** @type {?} */
    NgModuleTransitiveScopes.prototype.exported;
}
/**
 * Runtime link information for NgModules.
 *
 * This is the internal data structure used by the runtime to assemble components, directives,
 * pipes, and injectors.
 *
 * NOTE: Always use `defineNgModule` function to create this object,
 * never create the object directly since the shape of this object
 * can change between versions.
 * @record
 * @template T
 */
export function NgModuleDef() { }
if (false) {
    /**
     * Token representing the module. Used by DI.
     * @type {?}
     */
    NgModuleDef.prototype.type;
    /**
     * List of components to bootstrap.
     * @type {?}
     */
    NgModuleDef.prototype.bootstrap;
    /**
     * List of components, directives, and pipes declared by this module.
     * @type {?}
     */
    NgModuleDef.prototype.declarations;
    /**
     * List of modules or `ModuleWithProviders` imported by this module.
     * @type {?}
     */
    NgModuleDef.prototype.imports;
    /**
     * List of modules, `ModuleWithProviders`, components, directives, or pipes exported by this
     * module.
     * @type {?}
     */
    NgModuleDef.prototype.exports;
    /**
     * Cached value of computed `transitiveCompileScopes` for this module.
     *
     * This should never be read directly, but accessed via `transitiveScopesFor`.
     * @type {?}
     */
    NgModuleDef.prototype.transitiveCompileScopes;
}
/**
 * A wrapper around an NgModule that associates it with the providers.
 *
 * @param T the module type. In Ivy applications, this must be explicitly
 * provided.
 *
 * \@publicApi
 * @record
 * @template T
 */
export function ModuleWithProviders() { }
if (false) {
    /** @type {?} */
    ModuleWithProviders.prototype.ngModule;
    /** @type {?|undefined} */
    ModuleWithProviders.prototype.providers;
}
/**
 * A schema definition associated with an NgModule.
 *
 * @see `\@NgModule`, `CUSTOM_ELEMENTS_SCHEMA`, `NO_ERRORS_SCHEMA`
 *
 * @param name The name of a defined schema.
 *
 * \@publicApi
 * @record
 */
export function SchemaMetadata() { }
if (false) {
    /** @type {?} */
    SchemaMetadata.prototype.name;
}
/**
 * Defines a schema that allows an NgModule to contain the following:
 * - Non-Angular elements named with dash case (`-`).
 * - Element properties named with dash case (`-`).
 * Dash case is the naming convention for custom elements.
 *
 * \@publicApi
 * @type {?}
 */
export const CUSTOM_ELEMENTS_SCHEMA = {
    name: 'custom-elements'
};
/**
 * Defines a schema that allows any property on any element.
 *
 * \@publicApi
 * @type {?}
 */
export const NO_ERRORS_SCHEMA = {
    name: 'no-errors-schema'
};
/**
 * Type of the NgModule decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function NgModuleDecorator() { }
// WARNING: interface has both a type and a value, skipping emit
/**
 * \@Annotation
 * \@publicApi
 * @type {?}
 */
export const NgModule = makeDecorator('NgModule', (ngModule) => ngModule, undefined, undefined, 
/**
 * Decorator that marks the following class as an NgModule, and supplies
 * configuration metadata for it.
 *
 * * The `declarations` and `entryComponents` options configure the compiler
 * with information about what belongs to the NgModule.
 * * The `providers` options configures the NgModule's injector to provide
 * dependencies the NgModule members.
 * * The `imports` and `exports` options bring in members from other modules, and make
 * this module's members available to others.
 */
(type, meta) => SWITCH_COMPILE_NGMODULE(type, meta));
/**
 * \@description
 * Hook for manual bootstrapping of the application instead of using bootstrap array in \@NgModule
 * annotation.
 *
 * Reference to the current application is provided as a parameter.
 *
 * See ["Bootstrapping"](guide/bootstrapping) and ["Entry components"](guide/entry-components).
 *
 * \@usageNotes
 * ```typescript
 * class AppModule implements DoBootstrap {
 *   ngDoBootstrap(appRef: ApplicationRef) {
 *     appRef.bootstrap(AppComponent); // Or some other component
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @record
 */
export function DoBootstrap() { }
if (false) {
    /**
     * @param {?} appRef
     * @return {?}
     */
    DoBootstrap.prototype.ngDoBootstrap = function (appRef) { };
}
/**
 * @param {?} moduleType
 * @param {?} metadata
 * @return {?}
 */
function preR3NgModuleCompile(moduleType, metadata) {
    /** @type {?} */
    let imports = (metadata && metadata.imports) || [];
    if (metadata && metadata.exports) {
        imports = [...imports, metadata.exports];
    }
    /** @nocollapse */ moduleType.ngInjectorDef = defineInjector({
        factory: convertInjectableProviderToFactory(moduleType, { useClass: moduleType }),
        providers: metadata && metadata.providers,
        imports: imports,
    });
}
/** @type {?} */
export const SWITCH_COMPILE_NGMODULE__POST_R3__ = render3CompileNgModule;
/** @type {?} */
const SWITCH_COMPILE_NGMODULE__PRE_R3__ = preR3NgModuleCompile;
/** @type {?} */
const SWITCH_COMPILE_NGMODULE = SWITCH_COMPILE_NGMODULE__PRE_R3__;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbWV0YWRhdGEvbmdfbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFlLGNBQWMsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUV4RCxPQUFPLEVBQUMsa0NBQWtDLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFOUQsT0FBTyxFQUFDLGVBQWUsSUFBSSxzQkFBc0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRWhGLE9BQU8sRUFBZ0IsYUFBYSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7O0FBV2hFLDhDQUdDOzs7SUFGQywrQ0FBc0Q7O0lBQ3RELDRDQUFtRDs7Ozs7Ozs7Ozs7Ozs7QUFlckQsaUNBeUJDOzs7Ozs7SUF2QkMsMkJBQVE7Ozs7O0lBR1IsZ0NBQXVCOzs7OztJQUd2QixtQ0FBMEI7Ozs7O0lBRzFCLDhCQUFxQjs7Ozs7O0lBTXJCLDhCQUFxQjs7Ozs7OztJQU9yQiw4Q0FBdUQ7Ozs7Ozs7Ozs7OztBQVd6RCx5Q0FJQzs7O0lBRkMsdUNBQWtCOztJQUNsQix3Q0FBdUI7Ozs7Ozs7Ozs7OztBQVl6QixvQ0FBaUQ7OztJQUFmLDhCQUFhOzs7Ozs7Ozs7OztBQVUvQyxNQUFNLE9BQU8sc0JBQXNCLEdBQW1CO0lBQ3BELElBQUksRUFBRSxpQkFBaUI7Q0FDeEI7Ozs7Ozs7QUFPRCxNQUFNLE9BQU8sZ0JBQWdCLEdBQW1CO0lBQzlDLElBQUksRUFBRSxrQkFBa0I7Q0FDekI7Ozs7Ozs7QUFRRCx1Q0FNQzs7Ozs7OztBQXlNRCxNQUFNLE9BQU8sUUFBUSxHQUFzQixhQUFhLENBQ3BELFVBQVUsRUFBRSxDQUFDLFFBQWtCLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUztBQUNsRTs7Ozs7Ozs7OztHQVVHO0FBQ0gsQ0FBQyxJQUFrQixFQUFFLElBQWMsRUFBRSxFQUFFLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JoRixpQ0FBNkU7Ozs7OztJQUE5Qyw0REFBNEM7Ozs7Ozs7QUFFM0UsU0FBUyxvQkFBb0IsQ0FBQyxVQUE2QixFQUFFLFFBQWtCOztRQUN6RSxPQUFPLEdBQUcsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7SUFDbEQsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtRQUNoQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUM7SUFFRCxVQUFVLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQztRQUN4QyxPQUFPLEVBQUUsa0NBQWtDLENBQUMsVUFBVSxFQUFFLEVBQUMsUUFBUSxFQUFFLFVBQVUsRUFBQyxDQUFDO1FBQy9FLFNBQVMsRUFBRSxRQUFRLElBQUksUUFBUSxDQUFDLFNBQVM7UUFDekMsT0FBTyxFQUFFLE9BQU87S0FDakIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQzs7QUFHRCxNQUFNLE9BQU8sa0NBQWtDLEdBQUcsc0JBQXNCOztNQUNsRSxpQ0FBaUMsR0FBRyxvQkFBb0I7O01BQ3hELHVCQUF1QixHQUFrQyxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QXBwbGljYXRpb25SZWZ9IGZyb20gJy4uL2FwcGxpY2F0aW9uX3JlZic7XG5pbXBvcnQge0luamVjdG9yVHlwZSwgZGVmaW5lSW5qZWN0b3J9IGZyb20gJy4uL2RpL2RlZnMnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnLi4vZGkvcHJvdmlkZXInO1xuaW1wb3J0IHtjb252ZXJ0SW5qZWN0YWJsZVByb3ZpZGVyVG9GYWN0b3J5fSBmcm9tICcuLi9kaS91dGlsJztcbmltcG9ydCB7TmdNb2R1bGVUeXBlfSBmcm9tICcuLi9yZW5kZXIzJztcbmltcG9ydCB7Y29tcGlsZU5nTW9kdWxlIGFzIHJlbmRlcjNDb21waWxlTmdNb2R1bGV9IGZyb20gJy4uL3JlbmRlcjMvaml0L21vZHVsZSc7XG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL3R5cGUnO1xuaW1wb3J0IHtUeXBlRGVjb3JhdG9yLCBtYWtlRGVjb3JhdG9yfSBmcm9tICcuLi91dGlsL2RlY29yYXRvcnMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGV4cGFuc2lvbiBvZiBhbiBgTmdNb2R1bGVgIGludG8gaXRzIHNjb3Blcy5cbiAqXG4gKiBBIHNjb3BlIGlzIGEgc2V0IG9mIGRpcmVjdGl2ZXMgYW5kIHBpcGVzIHRoYXQgYXJlIHZpc2libGUgaW4gYSBwYXJ0aWN1bGFyIGNvbnRleHQuIEVhY2hcbiAqIGBOZ01vZHVsZWAgaGFzIHR3byBzY29wZXMuIFRoZSBgY29tcGlsYXRpb25gIHNjb3BlIGlzIHRoZSBzZXQgb2YgZGlyZWN0aXZlcyBhbmQgcGlwZXMgdGhhdCB3aWxsXG4gKiBiZSByZWNvZ25pemVkIGluIHRoZSB0ZW1wbGF0ZXMgb2YgY29tcG9uZW50cyBkZWNsYXJlZCBieSB0aGUgbW9kdWxlLiBUaGUgYGV4cG9ydGVkYCBzY29wZSBpcyB0aGVcbiAqIHNldCBvZiBkaXJlY3RpdmVzIGFuZCBwaXBlcyBleHBvcnRlZCBieSBhIG1vZHVsZSAodGhhdCBpcywgbW9kdWxlIEIncyBleHBvcnRlZCBzY29wZSBnZXRzIGFkZGVkXG4gKiB0byBtb2R1bGUgQSdzIGNvbXBpbGF0aW9uIHNjb3BlIHdoZW4gbW9kdWxlIEEgaW1wb3J0cyBCKS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ01vZHVsZVRyYW5zaXRpdmVTY29wZXMge1xuICBjb21waWxhdGlvbjoge2RpcmVjdGl2ZXM6IFNldDxhbnk+OyBwaXBlczogU2V0PGFueT47fTtcbiAgZXhwb3J0ZWQ6IHtkaXJlY3RpdmVzOiBTZXQ8YW55PjsgcGlwZXM6IFNldDxhbnk+O307XG59XG5cbmV4cG9ydCB0eXBlIE5nTW9kdWxlRGVmV2l0aE1ldGE8VCwgRGVjbGFyYXRpb25zLCBJbXBvcnRzLCBFeHBvcnRzPiA9IE5nTW9kdWxlRGVmPFQ+O1xuXG4vKipcbiAqIFJ1bnRpbWUgbGluayBpbmZvcm1hdGlvbiBmb3IgTmdNb2R1bGVzLlxuICpcbiAqIFRoaXMgaXMgdGhlIGludGVybmFsIGRhdGEgc3RydWN0dXJlIHVzZWQgYnkgdGhlIHJ1bnRpbWUgdG8gYXNzZW1ibGUgY29tcG9uZW50cywgZGlyZWN0aXZlcyxcbiAqIHBpcGVzLCBhbmQgaW5qZWN0b3JzLlxuICpcbiAqIE5PVEU6IEFsd2F5cyB1c2UgYGRlZmluZU5nTW9kdWxlYCBmdW5jdGlvbiB0byBjcmVhdGUgdGhpcyBvYmplY3QsXG4gKiBuZXZlciBjcmVhdGUgdGhlIG9iamVjdCBkaXJlY3RseSBzaW5jZSB0aGUgc2hhcGUgb2YgdGhpcyBvYmplY3RcbiAqIGNhbiBjaGFuZ2UgYmV0d2VlbiB2ZXJzaW9ucy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ01vZHVsZURlZjxUPiB7XG4gIC8qKiBUb2tlbiByZXByZXNlbnRpbmcgdGhlIG1vZHVsZS4gVXNlZCBieSBESS4gKi9cbiAgdHlwZTogVDtcblxuICAvKiogTGlzdCBvZiBjb21wb25lbnRzIHRvIGJvb3RzdHJhcC4gKi9cbiAgYm9vdHN0cmFwOiBUeXBlPGFueT5bXTtcblxuICAvKiogTGlzdCBvZiBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCBhbmQgcGlwZXMgZGVjbGFyZWQgYnkgdGhpcyBtb2R1bGUuICovXG4gIGRlY2xhcmF0aW9uczogVHlwZTxhbnk+W107XG5cbiAgLyoqIExpc3Qgb2YgbW9kdWxlcyBvciBgTW9kdWxlV2l0aFByb3ZpZGVyc2AgaW1wb3J0ZWQgYnkgdGhpcyBtb2R1bGUuICovXG4gIGltcG9ydHM6IFR5cGU8YW55PltdO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIG1vZHVsZXMsIGBNb2R1bGVXaXRoUHJvdmlkZXJzYCwgY29tcG9uZW50cywgZGlyZWN0aXZlcywgb3IgcGlwZXMgZXhwb3J0ZWQgYnkgdGhpc1xuICAgKiBtb2R1bGUuXG4gICAqL1xuICBleHBvcnRzOiBUeXBlPGFueT5bXTtcblxuICAvKipcbiAgICogQ2FjaGVkIHZhbHVlIG9mIGNvbXB1dGVkIGB0cmFuc2l0aXZlQ29tcGlsZVNjb3Blc2AgZm9yIHRoaXMgbW9kdWxlLlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBuZXZlciBiZSByZWFkIGRpcmVjdGx5LCBidXQgYWNjZXNzZWQgdmlhIGB0cmFuc2l0aXZlU2NvcGVzRm9yYC5cbiAgICovXG4gIHRyYW5zaXRpdmVDb21waWxlU2NvcGVzOiBOZ01vZHVsZVRyYW5zaXRpdmVTY29wZXN8bnVsbDtcbn1cblxuLyoqXG4gKiBBIHdyYXBwZXIgYXJvdW5kIGFuIE5nTW9kdWxlIHRoYXQgYXNzb2NpYXRlcyBpdCB3aXRoIHRoZSBwcm92aWRlcnMuXG4gKlxuICogQHBhcmFtIFQgdGhlIG1vZHVsZSB0eXBlLiBJbiBJdnkgYXBwbGljYXRpb25zLCB0aGlzIG11c3QgYmUgZXhwbGljaXRseVxuICogcHJvdmlkZWQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1vZHVsZVdpdGhQcm92aWRlcnM8XG4gICAgVCA9IGFueSAvKiogVE9ETyhhbHhodWIpOiByZW1vdmUgZGVmYXVsdCB3aGVuIGNhbGxlcnMgcGFzcyBleHBsaWNpdCB0eXBlIHBhcmFtICovPiB7XG4gIG5nTW9kdWxlOiBUeXBlPFQ+O1xuICBwcm92aWRlcnM/OiBQcm92aWRlcltdO1xufVxuXG4vKipcbiAqIEEgc2NoZW1hIGRlZmluaXRpb24gYXNzb2NpYXRlZCB3aXRoIGFuIE5nTW9kdWxlLlxuICpcbiAqIEBzZWUgYEBOZ01vZHVsZWAsIGBDVVNUT01fRUxFTUVOVFNfU0NIRU1BYCwgYE5PX0VSUk9SU19TQ0hFTUFgXG4gKlxuICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgYSBkZWZpbmVkIHNjaGVtYS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2NoZW1hTWV0YWRhdGEgeyBuYW1lOiBzdHJpbmc7IH1cblxuLyoqXG4gKiBEZWZpbmVzIGEgc2NoZW1hIHRoYXQgYWxsb3dzIGFuIE5nTW9kdWxlIHRvIGNvbnRhaW4gdGhlIGZvbGxvd2luZzpcbiAqIC0gTm9uLUFuZ3VsYXIgZWxlbWVudHMgbmFtZWQgd2l0aCBkYXNoIGNhc2UgKGAtYCkuXG4gKiAtIEVsZW1lbnQgcHJvcGVydGllcyBuYW1lZCB3aXRoIGRhc2ggY2FzZSAoYC1gKS5cbiAqIERhc2ggY2FzZSBpcyB0aGUgbmFtaW5nIGNvbnZlbnRpb24gZm9yIGN1c3RvbSBlbGVtZW50cy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BOiBTY2hlbWFNZXRhZGF0YSA9IHtcbiAgbmFtZTogJ2N1c3RvbS1lbGVtZW50cydcbn07XG5cbi8qKlxuICogRGVmaW5lcyBhIHNjaGVtYSB0aGF0IGFsbG93cyBhbnkgcHJvcGVydHkgb24gYW55IGVsZW1lbnQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgTk9fRVJST1JTX1NDSEVNQTogU2NoZW1hTWV0YWRhdGEgPSB7XG4gIG5hbWU6ICduby1lcnJvcnMtc2NoZW1hJ1xufTtcblxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIE5nTW9kdWxlIGRlY29yYXRvciAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ01vZHVsZURlY29yYXRvciB7XG4gIC8qKlxuICAgKiBEZWNvcmF0b3IgdGhhdCBtYXJrcyBhIGNsYXNzIGFzIGFuIE5nTW9kdWxlIGFuZCBzdXBwbGllcyBjb25maWd1cmF0aW9uIG1ldGFkYXRhLlxuICAgKi9cbiAgKG9iaj86IE5nTW9kdWxlKTogVHlwZURlY29yYXRvcjtcbiAgbmV3IChvYmo/OiBOZ01vZHVsZSk6IE5nTW9kdWxlO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIE5nTW9kdWxlIG1ldGFkYXRhLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ01vZHVsZSB7XG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIGluamVjdGFibGUgb2JqZWN0cyB0aGF0IGFyZSBhdmFpbGFibGUgaW4gdGhlIGluamVjdG9yXG4gICAqIG9mIHRoaXMgbW9kdWxlLlxuICAgKlxuICAgKiBAc2VlIFtEZXBlbmRlbmN5IEluamVjdGlvbiBndWlkZV0oZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24pXG4gICAqIEBzZWUgW05nTW9kdWxlIGd1aWRlXShndWlkZS9wcm92aWRlcnMpXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIERlcGVuZGVuY2llcyB3aG9zZSBwcm92aWRlcnMgYXJlIGxpc3RlZCBoZXJlIGJlY29tZSBhdmFpbGFibGUgZm9yIGluamVjdGlvblxuICAgKiBpbnRvIGFueSBjb21wb25lbnQsIGRpcmVjdGl2ZSwgcGlwZSBvciBzZXJ2aWNlIHRoYXQgaXMgYSBjaGlsZCBvZiB0aGlzIGluamVjdG9yLlxuICAgKiBUaGUgTmdNb2R1bGUgdXNlZCBmb3IgYm9vdHN0cmFwcGluZyB1c2VzIHRoZSByb290IGluamVjdG9yLCBhbmQgY2FuIHByb3ZpZGUgZGVwZW5kZW5jaWVzXG4gICAqIHRvIGFueSBwYXJ0IG9mIHRoZSBhcHAuXG4gICAqXG4gICAqIEEgbGF6eS1sb2FkZWQgbW9kdWxlIGhhcyBpdHMgb3duIGluamVjdG9yLCB0eXBpY2FsbHkgYSBjaGlsZCBvZiB0aGUgYXBwIHJvb3QgaW5qZWN0b3IuXG4gICAqIExhenktbG9hZGVkIHNlcnZpY2VzIGFyZSBzY29wZWQgdG8gdGhlIGxhenktbG9hZGVkIG1vZHVsZSdzIGluamVjdG9yLlxuICAgKiBJZiBhIGxhenktbG9hZGVkIG1vZHVsZSBhbHNvIHByb3ZpZGVzIHRoZSBgVXNlclNlcnZpY2VgLCBhbnkgY29tcG9uZW50IGNyZWF0ZWRcbiAgICogd2l0aGluIHRoYXQgbW9kdWxlJ3MgY29udGV4dCAoc3VjaCBhcyBieSByb3V0ZXIgbmF2aWdhdGlvbikgZ2V0cyB0aGUgbG9jYWwgaW5zdGFuY2VcbiAgICogb2YgdGhlIHNlcnZpY2UsIG5vdCB0aGUgaW5zdGFuY2UgaW4gdGhlIHJvb3QgaW5qZWN0b3IuXG4gICAqIENvbXBvbmVudHMgaW4gZXh0ZXJuYWwgbW9kdWxlcyBjb250aW51ZSB0byByZWNlaXZlIHRoZSBpbnN0YW5jZSBwcm92aWRlZCBieSB0aGVpciBpbmplY3RvcnMuXG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBkZWZpbmVzIGEgY2xhc3MgdGhhdCBpcyBpbmplY3RlZCBpblxuICAgKiB0aGUgSGVsbG9Xb3JsZCBOZ01vZHVsZTpcbiAgICpcbiAgICogYGBgXG4gICAqIGNsYXNzIEdyZWV0ZXIge1xuICAgKiAgICBncmVldChuYW1lOnN0cmluZykge1xuICAgKiAgICAgIHJldHVybiAnSGVsbG8gJyArIG5hbWUgKyAnISc7XG4gICAqICAgIH1cbiAgICogfVxuICAgKlxuICAgKiBATmdNb2R1bGUoe1xuICAgKiAgIHByb3ZpZGVyczogW1xuICAgKiAgICAgR3JlZXRlclxuICAgKiAgIF1cbiAgICogfSlcbiAgICogY2xhc3MgSGVsbG9Xb3JsZCB7XG4gICAqICAgZ3JlZXRlcjpHcmVldGVyO1xuICAgKlxuICAgKiAgIGNvbnN0cnVjdG9yKGdyZWV0ZXI6R3JlZXRlcikge1xuICAgKiAgICAgdGhpcy5ncmVldGVyID0gZ3JlZXRlcjtcbiAgICogICB9XG4gICAqIH1cbiAgICogYGBgXG4gICAqL1xuICBwcm92aWRlcnM/OiBQcm92aWRlcltdO1xuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMsIGFuZCBwaXBlcyAoW2RlY2xhcmFibGVzXShndWlkZS9nbG9zc2FyeSNkZWNsYXJhYmxlKSlcbiAgICogdGhhdCBiZWxvbmcgdG8gdGhpcyBtb2R1bGUuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIFRoZSBzZXQgb2Ygc2VsZWN0b3JzIHRoYXQgYXJlIGF2YWlsYWJsZSB0byBhIHRlbXBsYXRlIGluY2x1ZGUgdGhvc2UgZGVjbGFyZWQgaGVyZSwgYW5kXG4gICAqIHRob3NlIHRoYXQgYXJlIGV4cG9ydGVkIGZyb20gaW1wb3J0ZWQgTmdNb2R1bGVzLlxuICAgKlxuICAgKiBEZWNsYXJhYmxlcyBtdXN0IGJlbG9uZyB0byBleGFjdGx5IG9uZSBtb2R1bGUuXG4gICAqIFRoZSBjb21waWxlciBlbWl0cyBhbiBlcnJvciBpZiB5b3UgdHJ5IHRvIGRlY2xhcmUgdGhlIHNhbWUgY2xhc3MgaW4gbW9yZSB0aGFuIG9uZSBtb2R1bGUuXG4gICAqIEJlIGNhcmVmdWwgbm90IHRvIGRlY2xhcmUgYSBjbGFzcyB0aGF0IGlzIGltcG9ydGVkIGZyb20gYW5vdGhlciBtb2R1bGUuXG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBhbGxvd3MgdGhlIENvbW1vbk1vZHVsZSB0byB1c2UgdGhlIGBOZ0ZvcmBcbiAgICogZGlyZWN0aXZlLlxuICAgKlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIEBOZ01vZHVsZSh7XG4gICAqICAgZGVjbGFyYXRpb25zOiBbTmdGb3JdXG4gICAqIH0pXG4gICAqIGNsYXNzIENvbW1vbk1vZHVsZSB7XG4gICAqIH1cbiAgICogYGBgXG4gICAqL1xuICBkZWNsYXJhdGlvbnM/OiBBcnJheTxUeXBlPGFueT58YW55W10+O1xuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIE5nTW9kdWxlcyB3aG9zZSBleHBvcnRlZCBbZGVjbGFyYWJsZXNdKGd1aWRlL2dsb3NzYXJ5I2RlY2xhcmFibGUpXG4gICAqIGFyZSBhdmFpbGFibGUgdG8gdGVtcGxhdGVzIGluIHRoaXMgbW9kdWxlLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKlxuICAgKiBBIHRlbXBsYXRlIGNhbiB1c2UgZXhwb3J0ZWQgZGVjbGFyYWJsZXMgZnJvbSBhbnlcbiAgICogaW1wb3J0ZWQgbW9kdWxlLCBpbmNsdWRpbmcgdGhvc2UgZnJvbSBtb2R1bGVzIHRoYXQgYXJlIGltcG9ydGVkIGluZGlyZWN0bHlcbiAgICogYW5kIHJlLWV4cG9ydGVkLlxuICAgKiBGb3IgZXhhbXBsZSwgYE1vZHVsZUFgIGltcG9ydHMgYE1vZHVsZUJgLCBhbmQgYWxzbyBleHBvcnRzXG4gICAqIGl0LCB3aGljaCBtYWtlcyB0aGUgZGVjbGFyYWJsZXMgZnJvbSBgTW9kdWxlQmAgYXZhaWxhYmxlXG4gICAqIHdoZXJldmVyIGBNb2R1bGVBYCBpcyBpbXBvcnRlZC5cbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGFsbG93cyBNYWluTW9kdWxlIHRvIHVzZSBhbnRoaW5nIGV4cG9ydGVkIGJ5XG4gICAqIGBDb21tb25Nb2R1bGVgOlxuICAgKlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIEBOZ01vZHVsZSh7XG4gICAqICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbiAgICogfSlcbiAgICogY2xhc3MgTWFpbk1vZHVsZSB7XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqL1xuICBpbXBvcnRzPzogQXJyYXk8VHlwZTxhbnk+fE1vZHVsZVdpdGhQcm92aWRlcnM8e30+fGFueVtdPjtcblxuICAvKipcbiAgICogVGhlIHNldCBvZiBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCBhbmQgcGlwZXMgZGVjbGFyZWQgaW4gdGhpc1xuICAgKiBOZ01vZHVsZSB0aGF0IGNhbiBiZSB1c2VkIGluIHRoZSB0ZW1wbGF0ZSBvZiBhbnkgY29tcG9uZW50IHRoYXQgaXMgcGFydCBvZiBhblxuICAgKiBOZ01vZHVsZSB0aGF0IGltcG9ydHMgdGhpcyBOZ01vZHVsZS4gRXhwb3J0ZWQgZGVjbGFyYXRpb25zIGFyZSB0aGUgbW9kdWxlJ3MgcHVibGljIEFQSS5cbiAgICpcbiAgICogQSBkZWNsYXJhYmxlIGJlbG9uZ3MgdG8gb25lIGFuZCBvbmx5IG9uZSBOZ01vZHVsZS5cbiAgICogQSBtb2R1bGUgY2FuIGxpc3QgYW5vdGhlciBtb2R1bGUgYW1vbmcgaXRzIGV4cG9ydHMsIGluIHdoaWNoIGNhc2UgYWxsIG9mIHRoYXQgbW9kdWxlJ3NcbiAgICogcHVibGljIGRlY2xhcmF0aW9uIGFyZSBleHBvcnRlZC5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICogRGVjbGFyYXRpb25zIGFyZSBwcml2YXRlIGJ5IGRlZmF1bHQuXG4gICAqIElmIHRoaXMgTW9kdWxlQSBkb2VzIG5vdCBleHBvcnQgVXNlckNvbXBvbmVudCwgdGhlbiBvbmx5IHRoZSBjb21wb25lbnRzIHdpdGhpbiB0aGlzXG4gICAqIE1vZHVsZUEgY2FuIHVzZSBVc2VyQ29tcG9uZW50LlxuICAgKlxuICAgKiBNb2R1bGVBIGNhbiBpbXBvcnQgTW9kdWxlQiBhbmQgYWxzbyBleHBvcnQgaXQsIG1ha2luZyBleHBvcnRzIGZyb20gTW9kdWxlQlxuICAgKiBhdmFpbGFibGUgdG8gYW4gTmdNb2R1bGUgdGhhdCBpbXBvcnRzIE1vZHVsZUEuXG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBleHBvcnRzIHRoZSBgTmdGb3JgIGRpcmVjdGl2ZSBmcm9tIENvbW1vbk1vZHVsZS5cbiAgICpcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBATmdNb2R1bGUoe1xuICAgKiAgIGV4cG9ydHM6IFtOZ0Zvcl1cbiAgICogfSlcbiAgICogY2xhc3MgQ29tbW9uTW9kdWxlIHtcbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIGV4cG9ydHM/OiBBcnJheTxUeXBlPGFueT58YW55W10+O1xuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIGNvbXBvbmVudHMgdG8gY29tcGlsZSB3aGVuIHRoaXMgTmdNb2R1bGUgaXMgZGVmaW5lZCxcbiAgICogc28gdGhhdCB0aGV5IGNhbiBiZSBkeW5hbWljYWxseSBsb2FkZWQgaW50byB0aGUgdmlldy5cbiAgICpcbiAgICogRm9yIGVhY2ggY29tcG9uZW50IGxpc3RlZCBoZXJlLCBBbmd1bGFyIGNyZWF0ZXMgYSBgQ29tcG9uZW50RmFjdG9yeWBcbiAgICogYW5kIHN0b3JlcyBpdCBpbiB0aGUgYENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcmAuXG4gICAqXG4gICAqIEFuZ3VsYXIgYXV0b21hdGljYWxseSBhZGRzIGNvbXBvbmVudHMgaW4gdGhlIG1vZHVsZSdzIGJvb3RzdHJhcFxuICAgKiBhbmQgcm91dGUgZGVmaW5pdGlvbnMgaW50byB0aGUgYGVudHJ5Q29tcG9uZW50c2AgbGlzdC4gVXNlIHRoaXNcbiAgICogb3B0aW9uIHRvIGFkZCBjb21wb25lbnRzIHRoYXQgYXJlIGJvb3RzdHJhcHBlZFxuICAgKiB1c2luZyBvbmUgb2YgdGhlIGltcGVyYXRpdmUgdGVjaG5pcXVlcywgc3VjaCBhcyBgVmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoKWAuXG4gICAqXG4gICAqIEBzZWUgW0VudHJ5IENvbXBvbmVudHNdKGd1aWRlL2VudHJ5LWNvbXBvbmVudHMpXG4gICAqL1xuICBlbnRyeUNvbXBvbmVudHM/OiBBcnJheTxUeXBlPGFueT58YW55W10+O1xuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIGNvbXBvbmVudHMgdGhhdCBhcmUgYm9vdHN0cmFwcGVkIHdoZW5cbiAgICogdGhpcyBtb2R1bGUgaXMgYm9vdHN0cmFwcGVkLiBUaGUgY29tcG9uZW50cyBsaXN0ZWQgaGVyZVxuICAgKiBhcmUgYXV0b21hdGljYWxseSBhZGRlZCB0byBgZW50cnlDb21wb25lbnRzYC5cbiAgICovXG4gIGJvb3RzdHJhcD86IEFycmF5PFR5cGU8YW55PnxhbnlbXT47XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2Ygc2NoZW1hcyB0aGF0IGRlY2xhcmUgZWxlbWVudHMgdG8gYmUgYWxsb3dlZCBpbiB0aGUgTmdNb2R1bGUuXG4gICAqIEVsZW1lbnRzIGFuZCBwcm9wZXJ0aWVzIHRoYXQgYXJlIG5laXRoZXIgQW5ndWxhciBjb21wb25lbnRzIG5vciBkaXJlY3RpdmVzXG4gICAqIG11c3QgYmUgZGVjbGFyZWQgaW4gYSBzY2hlbWEuXG4gICAqXG4gICAqIEFsbG93ZWQgdmFsdWUgYXJlIGBOT19FUlJPUlNfU0NIRU1BYCBhbmQgYENVU1RPTV9FTEVNRU5UU19TQ0hFTUFgLlxuICAgKlxuICAgKiBAc2VjdXJpdHkgV2hlbiB1c2luZyBvbmUgb2YgYE5PX0VSUk9SU19TQ0hFTUFgIG9yIGBDVVNUT01fRUxFTUVOVFNfU0NIRU1BYFxuICAgKiB5b3UgbXVzdCBlbnN1cmUgdGhhdCBhbGxvd2VkIGVsZW1lbnRzIGFuZCBwcm9wZXJ0aWVzIHNlY3VyZWx5IGVzY2FwZSBpbnB1dHMuXG4gICAqL1xuICBzY2hlbWFzPzogQXJyYXk8U2NoZW1hTWV0YWRhdGF8YW55W10+O1xuXG4gIC8qKlxuICAgKiBBIG5hbWUgb3IgcGF0aCB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgdGhpcyBOZ01vZHVsZSBpbiBgZ2V0TW9kdWxlRmFjdG9yeWAuXG4gICAqIElmIGxlZnQgYHVuZGVmaW5lZGAsIHRoZSBOZ01vZHVsZSBpcyBub3QgcmVnaXN0ZXJlZCB3aXRoXG4gICAqIGBnZXRNb2R1bGVGYWN0b3J5YC5cbiAgICovXG4gIGlkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGlzIG1vZHVsZSB3aWxsIGJlIHNraXBwZWQgYnkgdGhlIEFPVCBjb21waWxlciBhbmQgc28gd2lsbCBhbHdheXMgYmUgY29tcGlsZWRcbiAgICogdXNpbmcgSklULlxuICAgKlxuICAgKiBUaGlzIGV4aXN0cyB0byBzdXBwb3J0IGZ1dHVyZSBJdnkgd29yayBhbmQgaGFzIG5vIGVmZmVjdCBjdXJyZW50bHkuXG4gICAqL1xuICBqaXQ/OiB0cnVlO1xufVxuXG4vKipcbiAqIEBBbm5vdGF0aW9uXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBOZ01vZHVsZTogTmdNb2R1bGVEZWNvcmF0b3IgPSBtYWtlRGVjb3JhdG9yKFxuICAgICdOZ01vZHVsZScsIChuZ01vZHVsZTogTmdNb2R1bGUpID0+IG5nTW9kdWxlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCxcbiAgICAvKipcbiAgICAgKiBEZWNvcmF0b3IgdGhhdCBtYXJrcyB0aGUgZm9sbG93aW5nIGNsYXNzIGFzIGFuIE5nTW9kdWxlLCBhbmQgc3VwcGxpZXNcbiAgICAgKiBjb25maWd1cmF0aW9uIG1ldGFkYXRhIGZvciBpdC5cbiAgICAgKlxuICAgICAqICogVGhlIGBkZWNsYXJhdGlvbnNgIGFuZCBgZW50cnlDb21wb25lbnRzYCBvcHRpb25zIGNvbmZpZ3VyZSB0aGUgY29tcGlsZXJcbiAgICAgKiB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYmVsb25ncyB0byB0aGUgTmdNb2R1bGUuXG4gICAgICogKiBUaGUgYHByb3ZpZGVyc2Agb3B0aW9ucyBjb25maWd1cmVzIHRoZSBOZ01vZHVsZSdzIGluamVjdG9yIHRvIHByb3ZpZGVcbiAgICAgKiBkZXBlbmRlbmNpZXMgdGhlIE5nTW9kdWxlIG1lbWJlcnMuXG4gICAgICogKiBUaGUgYGltcG9ydHNgIGFuZCBgZXhwb3J0c2Agb3B0aW9ucyBicmluZyBpbiBtZW1iZXJzIGZyb20gb3RoZXIgbW9kdWxlcywgYW5kIG1ha2VcbiAgICAgKiB0aGlzIG1vZHVsZSdzIG1lbWJlcnMgYXZhaWxhYmxlIHRvIG90aGVycy5cbiAgICAgKi9cbiAgICAodHlwZTogTmdNb2R1bGVUeXBlLCBtZXRhOiBOZ01vZHVsZSkgPT4gU1dJVENIX0NPTVBJTEVfTkdNT0RVTEUodHlwZSwgbWV0YSkpO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogSG9vayBmb3IgbWFudWFsIGJvb3RzdHJhcHBpbmcgb2YgdGhlIGFwcGxpY2F0aW9uIGluc3RlYWQgb2YgdXNpbmcgYm9vdHN0cmFwIGFycmF5IGluIEBOZ01vZHVsZVxuICogYW5ub3RhdGlvbi5cbiAqXG4gKiBSZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgYXBwbGljYXRpb24gaXMgcHJvdmlkZWQgYXMgYSBwYXJhbWV0ZXIuXG4gKlxuICogU2VlIFtcIkJvb3RzdHJhcHBpbmdcIl0oZ3VpZGUvYm9vdHN0cmFwcGluZykgYW5kIFtcIkVudHJ5IGNvbXBvbmVudHNcIl0oZ3VpZGUvZW50cnktY29tcG9uZW50cykuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGNsYXNzIEFwcE1vZHVsZSBpbXBsZW1lbnRzIERvQm9vdHN0cmFwIHtcbiAqICAgbmdEb0Jvb3RzdHJhcChhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7XG4gKiAgICAgYXBwUmVmLmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyAvLyBPciBzb21lIG90aGVyIGNvbXBvbmVudFxuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRG9Cb290c3RyYXAgeyBuZ0RvQm9vdHN0cmFwKGFwcFJlZjogQXBwbGljYXRpb25SZWYpOiB2b2lkOyB9XG5cbmZ1bmN0aW9uIHByZVIzTmdNb2R1bGVDb21waWxlKG1vZHVsZVR5cGU6IEluamVjdG9yVHlwZTxhbnk+LCBtZXRhZGF0YTogTmdNb2R1bGUpOiB2b2lkIHtcbiAgbGV0IGltcG9ydHMgPSAobWV0YWRhdGEgJiYgbWV0YWRhdGEuaW1wb3J0cykgfHwgW107XG4gIGlmIChtZXRhZGF0YSAmJiBtZXRhZGF0YS5leHBvcnRzKSB7XG4gICAgaW1wb3J0cyA9IFsuLi5pbXBvcnRzLCBtZXRhZGF0YS5leHBvcnRzXTtcbiAgfVxuXG4gIG1vZHVsZVR5cGUubmdJbmplY3RvckRlZiA9IGRlZmluZUluamVjdG9yKHtcbiAgICBmYWN0b3J5OiBjb252ZXJ0SW5qZWN0YWJsZVByb3ZpZGVyVG9GYWN0b3J5KG1vZHVsZVR5cGUsIHt1c2VDbGFzczogbW9kdWxlVHlwZX0pLFxuICAgIHByb3ZpZGVyczogbWV0YWRhdGEgJiYgbWV0YWRhdGEucHJvdmlkZXJzLFxuICAgIGltcG9ydHM6IGltcG9ydHMsXG4gIH0pO1xufVxuXG5cbmV4cG9ydCBjb25zdCBTV0lUQ0hfQ09NUElMRV9OR01PRFVMRV9fUE9TVF9SM19fID0gcmVuZGVyM0NvbXBpbGVOZ01vZHVsZTtcbmNvbnN0IFNXSVRDSF9DT01QSUxFX05HTU9EVUxFX19QUkVfUjNfXyA9IHByZVIzTmdNb2R1bGVDb21waWxlO1xuY29uc3QgU1dJVENIX0NPTVBJTEVfTkdNT0RVTEU6IHR5cGVvZiByZW5kZXIzQ29tcGlsZU5nTW9kdWxlID0gU1dJVENIX0NPTVBJTEVfTkdNT0RVTEVfX1BSRV9SM19fO1xuIl19