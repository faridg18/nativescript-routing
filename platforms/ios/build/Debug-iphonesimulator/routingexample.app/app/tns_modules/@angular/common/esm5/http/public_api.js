/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { HttpBackend, HttpHandler } from './src/backend';
export { HttpClient } from './src/client';
export { HttpHeaders } from './src/headers';
export { HTTP_INTERCEPTORS } from './src/interceptor';
export { JsonpClientBackend, JsonpInterceptor } from './src/jsonp';
export { HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, HttpInterceptingHandler as ɵHttpInterceptingHandler } from './src/module';
export { HttpParams, HttpUrlEncodingCodec } from './src/params';
export { HttpRequest } from './src/request';
export { HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase } from './src/response';
export { HttpXhrBackend, XhrFactory } from './src/xhr';
export { HttpXsrfTokenExtractor } from './src/xsrf';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9odHRwL3B1YmxpY19hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxpQkFBaUIsRUFBa0IsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDakUsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixJQUFJLHdCQUF3QixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ2hKLE9BQU8sRUFBcUIsVUFBVSxFQUFFLG9CQUFvQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUE0QixpQkFBaUIsRUFBYSxhQUFhLEVBQUUsa0JBQWtCLEVBQXFCLFlBQVksRUFBRSxnQkFBZ0IsRUFBK0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzTSxPQUFPLEVBQUMsY0FBYyxFQUFFLFVBQVUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNyRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCB7SHR0cEJhY2tlbmQsIEh0dHBIYW5kbGVyfSBmcm9tICcuL3NyYy9iYWNrZW5kJztcbmV4cG9ydCB7SHR0cENsaWVudH0gZnJvbSAnLi9zcmMvY2xpZW50JztcbmV4cG9ydCB7SHR0cEhlYWRlcnN9IGZyb20gJy4vc3JjL2hlYWRlcnMnO1xuZXhwb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cEludGVyY2VwdG9yfSBmcm9tICcuL3NyYy9pbnRlcmNlcHRvcic7XG5leHBvcnQge0pzb25wQ2xpZW50QmFja2VuZCwgSnNvbnBJbnRlcmNlcHRvcn0gZnJvbSAnLi9zcmMvanNvbnAnO1xuZXhwb3J0IHtIdHRwQ2xpZW50SnNvbnBNb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsIEh0dHBDbGllbnRYc3JmTW9kdWxlLCBIdHRwSW50ZXJjZXB0aW5nSGFuZGxlciBhcyDJtUh0dHBJbnRlcmNlcHRpbmdIYW5kbGVyfSBmcm9tICcuL3NyYy9tb2R1bGUnO1xuZXhwb3J0IHtIdHRwUGFyYW1ldGVyQ29kZWMsIEh0dHBQYXJhbXMsIEh0dHBVcmxFbmNvZGluZ0NvZGVjfSBmcm9tICcuL3NyYy9wYXJhbXMnO1xuZXhwb3J0IHtIdHRwUmVxdWVzdH0gZnJvbSAnLi9zcmMvcmVxdWVzdCc7XG5leHBvcnQge0h0dHBEb3dubG9hZFByb2dyZXNzRXZlbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJSZXNwb25zZSwgSHR0cFByb2dyZXNzRXZlbnQsIEh0dHBSZXNwb25zZSwgSHR0cFJlc3BvbnNlQmFzZSwgSHR0cFNlbnRFdmVudCwgSHR0cFVzZXJFdmVudH0gZnJvbSAnLi9zcmMvcmVzcG9uc2UnO1xuZXhwb3J0IHtIdHRwWGhyQmFja2VuZCwgWGhyRmFjdG9yeX0gZnJvbSAnLi9zcmMveGhyJztcbmV4cG9ydCB7SHR0cFhzcmZUb2tlbkV4dHJhY3Rvcn0gZnJvbSAnLi9zcmMveHNyZic7XG4iXX0=